export async function POST(req: Request) {
  const data = await req.json();
  // Here you would typically send the data to an email service or database
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}