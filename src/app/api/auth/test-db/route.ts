import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Test database connection
    const userCount = await prisma.user.count();
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        password: true, // Check if password exists
      },
    });

    return NextResponse.json({
      success: true,
      userCount,
      users: users.map(user => ({
        ...user,
        hasPassword: !!user.password,
        password: undefined, // Don't expose actual password
      })),
    });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
}
