score = 0
while true
  ["M---", "-M--", "--M-", "---M"].each do |map|
    score = score + 1
    system "clear"
    puts "Score: #{score}"
    print "\b\b\b\b\b"
    puts map
    system "bash -c '(read -sn 1 a; echo $a)' > .command"
    command = File.read(".command")
    system "rm -f .command"
    if command == "w"
      continue
    end
  end
end