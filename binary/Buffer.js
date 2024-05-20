const buffer = Buffer.from("C3F54840", "hex")
console.log(buffer.readFloatLE())


const bufferInt8 = Buffer.from("FF", "hex")
console.log(bufferInt8.readInt8())

const buffer2 = Buffer.from("00000028", "hex")
console.log(buffer2.readInt32BE())

const buffer3 = Buffer.from("7e000090", "hex")
console.log(buffer3.readInt32BE())

const tmp = 0x7e0000a0;
console.log(tmp.toString(2))

// buf.readBigInt64BE()
// buf.readBigInt64LE()
// buf.readBigUInt64BE()
// buf.readBigUInt64LE()
// buf.readDoubleBE()
// buf.readDoubleLE()
// buf.readFloatBE()
// buf.readFloatLE()
// buf.readInt8()
// buf.readInt16BE()
// buf.readInt16LE()
// buf.readInt32BE()
// buf.readInt32LE()
// buf.readIntBE(offset, byteLength)
// buf.readIntLE(offset, byteLength)
// buf.readUInt8()
// buf.readUInt16BE()
// buf.readUInt16LE()
// buf.readUInt32BE()
// buf.readUInt32LE()
// buf.readUIntBE(offset, byteLength)
// buf.readUIntLE(offset, byteLength)
