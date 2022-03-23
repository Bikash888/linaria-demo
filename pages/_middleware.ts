

import { NextRequest, NextResponse } from 'next/server'


const BLOCKED_COUNTRY = 'NP'

export function middleware(req: NextRequest) {
  const country = req.geo.country || 'NP'

  if (req.nextUrl.pathname=="/japan") {
    return NextResponse.rewrite("/japan")
  }
  if (country == BLOCKED_COUNTRY) {
    return NextResponse.rewrite("/nepal")
  }
}