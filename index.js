function diemKV(a) {
  switch (a) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    case "X":
      return 0;
  }
}
function diemDT(b) {
  switch (b) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    case 0:
      return 0;
  }
}
document.querySelector("#btn-1").onclick = () => {
  let theP = document.createElement("p");
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMon1 = document.getElementById("diemMon1").value * 1;
  let diemMon2 = document.getElementById("diemMon2").value * 1;
  let diemMon3 = document.getElementById("diemMon3").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;
  let diemKhuVuc = diemKV(khuVuc);
  let diemDoiTuong = diemDT(doiTuong);
  let diemTrungBinh = diemMon1 + diemMon2 + diemMon3;
  let diemTong = diemTrungBinh + diemKhuVuc + diemDoiTuong;
  if (
    diemTong < diemChuan ||
    diemMon1 == 0 ||
    diemMon2 == 0 ||
    diemMon3 == 0 ||
    diemChuan > 30
  ) {
    theP.className = "bg-danger mt-4 p-3 text-white";
    theP.innerHTML = `Bạn đã rớt <br>
                      Tổng điểm là:${diemTong}  `;
  } else {
    theP.className = "bg-success mt-4 p-3 text-white";
    theP.innerHTML = `Bạn đã đậu <br>
                        Tổng điểm là:${diemTong}`;
  }
  let doc = document.querySelector(".container#baiTap1 p");
  if (doc) {
    document.querySelector("#baiTap1").removeChild(doc);
    document.querySelector("#baiTap1").appendChild(theP);
  } else {
    document.querySelector("#baiTap1").appendChild(theP);
  }
};

function soTienKw(a) {
  let tongTien = 0;
  if (a > 0 && a <= 50) {
    tongTien = a * 500;
  }
  if (a > 50 && a <= 100) {
    tongTien = 50 * 500 + (a - 50) * 650;
  }
  if (a > 100 && a <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (a - 100) * 850;
  }
  if (a > 200 && a <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (a - 200) * 1100;
  }
  if (a > 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (a - 350) * 1300;
  }
  return tongTien;
}
document.querySelector("#btn-2").onclick = () => {
  let theP = document.createElement("p");
  theP.className = "bg-primary text-white p-3 mt-3";
  let hoTen = document.querySelector("#hoTen").value;
  let soKw = document.querySelector("#soKw").value * 1;
  let tienSoKw = soTienKw(soKw);
  theP.innerHTML = `Họ và tên : ${hoTen} <br>
                    Tổng số tiền:${tienSoKw.toLocaleString("VN", {
                      style: "currency",
                      currency: "VND",
                    })}`;
  let doc = document.querySelector(".container#baiTap2 p");
  if (doc) {
    document.querySelector("#baiTap2").removeChild(doc);
    document.querySelector("#baiTap2").appendChild(theP);
  } else {
    document.querySelector("#baiTap2").appendChild(theP);
  }
};
function TinhThueSuat(a) {
  let tienThue = 0;
  if (a > 0 && a <= 60000000) {
    tienThue = a * 0.05;
  }
  if (a > 60000000 && a <= 120000000) {
    tienThue = a * 0.1;
  }
  if (a > 120000000 && a <= 210000000) {
    tienThue = a * 0.15;
  }
  if (a > 210000000 && a <= 384000000) {
    tienThue = a * 0.2;
  }
  if (a > 384000000 && a <= 624000000) {
    tienThue = a * 0.25;
  }
  if (a > 624000000 && a <= 960000000) {
    tienThue = a * 0.3;
  }
  if (a > 960000000) {
    tienThue = a * 0.35;
  }
  return tienThue;
}
document.querySelector("#btn-3").onclick = () => {
  let theP = document.createElement("p");
  theP.className = "bg-primary text-white p-3 mt-3";
  let hoTen = document.getElementById("hoTen3").value;
  console.log(hoTen);
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let phuThuoc = document.getElementById("phuThuoc").value * 1;
  let thuNhapChiuThue = thuNhap - 4000000 - phuThuoc * 1600000;
  let thueSuat = TinhThueSuat(thuNhapChiuThue);
  theP.innerHTML = `Họ và tên : ${hoTen} <br>
                    Tổng thuế thu nhập cá nhân :${thueSuat.toLocaleString(
                      "VN",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )}`;
  let doc = document.querySelector(".container#baiTap3 p");
  if (doc) {
    document.querySelector("#baiTap3").removeChild(doc);
    document.querySelector("#baiTap3").appendChild(theP);
  } else {
    document.querySelector("#baiTap3").appendChild(theP);
  }
};

function changeFunction() {
  let loaiKH = document.getElementById("loaiKH").value;
  if (loaiKH === "Nhà dân") {
    document.getElementById("ketNoi").style.display = "none";
  } else {
    document.getElementById("ketNoi").style.display = "block";
  }
}
function tinhPhiCapDien(a, b) {
  let tienPhi = 0;
  if (b <= 10) {
    tienPhi = 15 + 75 + 50 * a;
  } else {
    tienPhi = 15 + 75 + (b - 10) * 5 + 50 * a;
  }
  return tienPhi;
}
document.querySelector("#btn-4").onclick = () => {
  let theP = document.createElement("p");
  theP.className = "bg-primary text-white p-3 mt-3";
  let loaiKH = document.getElementById("loaiKH").value;
  let maKH = document.getElementById("maKH").value;
  let kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let phiCapDien = 0;
  if (loaiKH == "Nhà dân") {
    phiCapDien = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  } else {
    phiCapDien = tinhPhiCapDien(kenhCaoCap, soKetNoi);
  }
  theP.innerHTML = `Mã Khách Hàng : ${maKH} <br>
                    Tiền Cáp :${phiCapDien.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}`;
  let doc = document.querySelector(".container#baiTap4 p");
  if (doc) {
    document.querySelector("#baiTap4").removeChild(doc);
    document.querySelector("#baiTap4").appendChild(theP);
  } else {
    document.querySelector("#baiTap4").appendChild(theP);
  }
};
