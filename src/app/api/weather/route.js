export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&lang=ja`;
  
    const res = await fetch(url);
    const weather = await res.json();
    return Response.json({ weather });
  }