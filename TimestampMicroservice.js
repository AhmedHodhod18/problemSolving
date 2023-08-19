app.get('/api/:date?', (req, res) => {
  
  const dateString = req.params.date;
  const dateRegex = /^[0-9]+$/;
  const numbersOnly = dateRegex.test(dateString)

  if(!numbersOnly){
    const unixTimestamp = Date.parse(dateString);
    const utcDate = new Date(unixTimestamp).toISOString()
    
    if(unixTimestamp){
       res.json({ unix: unixTimestamp, utc: utcDate })
    } else {
      res.json({ error: "Invalid Date" })
    }
  } else {
    const unixTimestamp = Number(dateString);
    const actualDate = new Date(unixTimestamp);
    const utcDate = actualDate.toISOString();
    res.json({ unix: unixTimestamp, utc: utcDate });
  }
})

app.get('/api/', (req, res) => {
  const currentDate = new Date().toUTCString();
  const currentUnix = Date.parse(currentDate);
  res.json({ unix: currentUnix, utc: currentDate });
})
