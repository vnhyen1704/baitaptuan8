function kiemTraMaBenhNhan() {
    const maBenhNhan = $("#mabenhnhan").val();
    if (!maBenhNhan) {
      $(".mm-ins").html("Không được để trống và có dạng: BN-YYYYY (BN cố định, YYYYY là 5 số bất kì)");
      return false;
    }
    const dk = /^BN-\d{5}$/;
    if (dk.test(maBenhNhan)) {
      $(".mm-ins").html("(*)"); return true;
    } else {
      $(".mm-ins").html(
        "Có dạng: BN-YYYYY (BN cố định, YYYYY là 5 số bất kì)"
      );
      return false;
    }
  }
  // 
  function kiemTraMatKhau() {
    const matKhau = $("#matkhau").val();
    if (!matKhau) {
      $(".mk-mes").html("Không được để trống và mật khẩu phải từ 6 kí tự trở lên (Bất kỳ trừ kí tự đặc biệt)");
      return false;
    }
    const dk = /^\w{6,}$/;
    if (dk.test(matKhau)) {
      $(".mk-mes").html("(*)"); return true;
    } else {
      $(".mk-mes").html(
        "Mật khẩu phải từ 6 kí tự trở lên (Bất kỳ trừ kí tự đặc biệt)"
      );
      return false;
    }
  }
  // 
  function kiemTraNgayKham() {
    var ngayKham = new Date($("#ngaykham").val());
    var currentDate = new Date();
    if (!ngayKham) {
      $(".nk-mes").html("Chưa chọn ngày khám"); return false;
    }
    if (ngayKham.getTime() > currentDate.getTime()) {
      $(".nk-mes").html("(*)"); return true;
    } else {
      $(".nk-mes").html("Ngày khám phải sau ngày hiện tại");
      return false;
    }
  }
  // 
  function reSet() {
    $("#mabenhnhan").val("");
    $("#matkhau").val("");
    $("#ngayKham").val("");
    $("#modal").modal("hide");
  }
  function add() {
    const ma = $("#mabenhnhan").val();
    const matKhau =  $("#matkhau").val();
    const ngayKham = $("#ngaykham").val();
    const phuThuKhamBenh = $("#phuthuKhamBenh").prop("checked");
    const phuThuDieuTri =  $("#phuthuDieuTri").prop("checked");
    const phuThuBacSi = $("#phuthuBacSi").prop("checked");
    const chuyenKhoa =  $("#chuyenkhoa").val();
    let phuThu = 0;
    if (phuThuKhamBenh) phuThu = phuThu + 50000;
    if (phuThuDieuTri)  phuThu = phuThu + 50000;
    if (phuThuBacSi)    phuThu = phuThu + 50000;
    let stt = 0;
        stt++;
    const addNew =
      "<tr><td>" + stt +
      "</td><td>" + ma +
      "</td><td>" + matKhau +
      "</td><td>" + ngayKham +
      "</td><td>" + phuThu +
      "</td><td>" + chuyenKhoa +
      "</td></tr>";
    $("#tbody").append(addNew);
  }
  $("#open-modal").click(() => {
    $("#modal").modal("show");
  });
  $("#mabenhnhan").blur(kiemTraMaBenhNhan);
  $("#matkhau").blur(kiemTraMatKhau);
  $("#ngaykham").blur(kiemTraNgayKham);
  $("#form").submit((e) => e.preventDefault());
  $("#btn-submit").click(() => {
    const ma = kiemTraMaBenhNhan();
    const mk = kiemTraMatKhau();
    const nk = kiemTraNgayKham();
    if (ma && mk && nk) {
      add();
      reSet();
    }
  });