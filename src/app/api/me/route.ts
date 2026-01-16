import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value;
    if(!token){
      return NextResponse.json({authenticated: false});
    };
    const response = await fetch("http://localhost:3001/private/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    if(!response.ok) {
      return NextResponse.json({
        authenticated: false,
        error: "Backend error",
      },{status: response.status});
      
    }
    
    const data = await response.json();

    if(!data || !data.userId) {
      return NextResponse.json({authenticated: false});
    }
    return NextResponse.json({
      authenticated: true,
      userId: data.userId
    });
    
    
  } catch (err) {
    console.error("erro: catch",err);
    return NextResponse.json({
      authenticated: false,
      error: "Json invalido do Backend",
    },{status: 500});
  }
  
  
  
     
    
  
 

  

 
}