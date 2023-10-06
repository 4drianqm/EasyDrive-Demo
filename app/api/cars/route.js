import { NextResponse } from 'next/server';
import connectMongoDB from '../../../libs/mongodb'
import Car from '../../../models/car'

export async function POST(request){
    const {Make, Model, Year, Price, Avg, Type} = await request.json()
    await connectMongoDB();
    await Car.create({Make, Model, Year, Price, Avg, Type});
    return NextResponse.json({message: "Car Created"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const cars = await Car.find();
    return NextResponse.json({cars})
}
