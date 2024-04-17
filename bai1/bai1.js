function tinh() {
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    var operation = event.submitter.textContent;

    if (!isNaN(inputA) && !isNaN(inputB)) {
        if (operation === "SUM") {
            document.getElementById("ketqua").innerText = "Kết quả: " + (inputA + inputB);
        } else if (operation === "SUBTRACT") {
            document.getElementById("ketqua").innerText = "Kết quả " + (inputA - inputB);
        } else if (operation === "MULTIPLY") {
            document.getElementById("ketqua").innerText = "Kết quả " + (inputA * inputB);
        } else if (operation === "DIVIDE") {
            if (inputB !== 0) {
                document.getElementById("ketqua").innerText = "Kết quả " + (inputA / inputB);
            } else {
                document.getElementById("ketqua").innerText = "Số B phải khác 0";
            }
        }
    } else {
        document.getElementById("ketqua").innerText = "Phải Nhập Số";
    }
}
