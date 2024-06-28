// pages/api/menu-category-availability.js
import { MenuCategoryAvailability } from '../../../models/MenuCategoryAvaliablity';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET() {
    await mongoose.connect(process.env.MONGODB_URL);
    const availabilities = await MenuCategoryAvailability.find();
    return NextResponse.json(availabilities);
}

export async function POST(req) {
    await mongoose.connect(process.env.MONGODB_URL);
    const { categoryName, available } = await req.json();
    const availability = await MenuCategoryAvailability.findOneAndUpdate(
        { categoryName },
        { categoryName, available },
        { upsert: true, new: true }
    );
    return NextResponse.json(availability);
}

export async function PUT(req) {
    await mongoose.connect(process.env.MONGODB_URL);
    const { categoryName, available } = await req.json();
    const availability = await MenuCategoryAvailability.findOneAndUpdate(
        { categoryName },
        { categoryName, available },
        { upsert: true, new: true }
    );
    return NextResponse.json(availability);
}