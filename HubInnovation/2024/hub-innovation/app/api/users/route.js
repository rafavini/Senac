import { NextResponse } from 'next/server';
import path from 'path';
const dbPath = path.join(process.cwd(), 'app', 'api', 'db', 'database.db');
const db = require('better-sqlite3')(dbPath);

export async function GET() {
    const sql = 'SELECT * FROM users';
    const rows = db.prepare(sql).all();
    return NextResponse.json(rows);
}
