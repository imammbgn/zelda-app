export const ToRupiah = (number) =>{
    return number.toLocaleString("id-ID", {
        styles: "currency",
        currency: "IDR",
    })
}