// //route.jsではAPIエンドポイントの動作を定義している！！

// export async function GET(req){
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
//     const {searchParams} = new URL (req.url)
//     const city = searchParams.get("city"); 
//     const res = await fetch(url);
//     const weather = await res.json();
//     return(
//         Response.json({ weather })
//     )
// }

export async function GET(req) {
    // まずリクエストのURLからクエリパラメータを取得する
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");
  
    // city が取得できたら、その値を使って API URL を作成
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
    
    const res = await fetch(url);
    const weather = await res.json();
    return Response.json({ weather });
  }
  