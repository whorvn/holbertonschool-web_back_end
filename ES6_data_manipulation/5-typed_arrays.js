/* eslint-disable */
export default function createInt8TypedArray(length, position, value) {
    if (position >= length || position <0 ){
        throw new Error('Position outside of range');
    }
    const buffer = new ArrayBuffer(length);
    const veiw = new DataView(buffer);

    veiw.setInt8(position, value);

    return veiw;
}
