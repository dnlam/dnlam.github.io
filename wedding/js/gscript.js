// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "<span>Ngọc Lâm & Quỳnh Hương cordially invite</span>";
      invitation_end_en = "<span>to our wedding ceremony and wedding party.</span>";
    invitation_start_vi = "<span>Ngọc Lâm và Quỳnh Hương thân mời</span>";
    invitation_start_vi_formal = "<span>Ngọc Lâm và Quỳnh Hương kính mời</span>";
      invitation_end_vi = "<span>đến dự đám cưới và tiệc cưới của chúng mình.</span>";
      invitation_end_vi_no_pronoun = "<span>đến dự đám cưới và tiệc cưới của ";
    invitation_start_fr = "<span>Ngọc Lâm & Quỳnh Hương sont heureux d'inviter</span>";
      invitation_end_fr = "<span>à nos cérémonie et réception de mariage.</span>";

function setInvitation(name_en, name_vi, name_fr, defaultlang, vi_pronoun="") {
  changeLanguage(defaultlang, before_rsvp_init=true);
  document.getElementById("guest_invitation_en").innerHTML = invitation_start_en + name_en + invitation_end_en;
  document.getElementById("guest_invitation_fr").innerHTML = invitation_start_fr + name_fr + invitation_end_fr;
  if (vi_pronoun=="") {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + name_vi + invitation_end_vi;
  }
  else {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi_formal + name_vi + invitation_end_vi_no_pronoun + vi_pronoun + ".</span>";
    }
}

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#anh-luan-hong-anh") {
  setInvitation(
    name_en="Luan and Hong Anh",
    name_vi="anh Luân và Hồng Anh",
    name_fr="Luan et Hong Anh",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-hai") {
  setInvitation(
    name_en="anh Hải và gia đình",
    name_vi="anh Hải và gia đình",
    name_fr="anh Hải và gia đình",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#kien-mai") {
  setInvitation(
    name_en="Kien and Mai",
    name_vi="Kiên và Mai",
    name_fr="Kien et Mai",
    defaultlang="vi",
    // vi_pronoun="bọn mình"
  )
}
else if (window.location.hash == "#phong-quynh") {
  setInvitation(
    name_en="Phong and Quynh",
    name_vi="Phong và Quỳnh",
    name_fr="Phong et Quynh",
    defaultlang="vi",
    vi_pronoun="bọn mình"
  )
}
else if (window.location.hash == "#Thien") {
  setInvitation(
    name_en="Thien",
    name_vi="Thiện",
    name_fr="Thien",
    defaultlang="vi",
    //vi_pronoun=""
  )
}
else if (window.location.hash == "#anh-truong-tuan") {
  setInvitation(
    name_en="Tuan and girlfriend",
    name_vi="anh Tuấn và người thương",
    name_fr="Tuan et ta copine",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#vo-tuan") {
  setInvitation(
    name_en="Vo Tuan",
    name_vi="Võ Tuấn",
    name_fr="Vo Tuan",
    defaultlang="vi",
    // vi_pronoun="bọn mình"
  )
}
else if (window.location.hash == "#anh-ngoc-anh") {
  setInvitation(
    name_en="Ngoc Anh and your familly",
    name_vi="gia đình anh Ngọc Anh",
    name_fr="Ngoc Anh et ta famille",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-tan") {
  setInvitation(
    name_en="Tan",
    name_vi="anh Tân",
    name_fr="Tan",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#huy-uyen") {
  setInvitation(
    name_en="Huy and Uyen",
    name_vi="Huy và Uyên",
    name_fr="Huy et Uyen",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#gia-dinh-Linh") {
  setInvitation(
    name_en="gia đình Linh",
    name_vi="gia đình Linh",
    name_fr="gia đình Linh",
    defaultlang="vi",
    vi_pronoun="chúng cháu"
  )
}
else if (window.location.hash == "#mai-anh") {
  setInvitation(
    name_en="Mai Anh",
    name_vi="Mai Anh",
    name_fr="Mai Anh",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#bich-ngoc") {
  setInvitation(
    name_en="Bich Ngoc",
    name_vi="Bích Ngọc",
    name_fr="Bich Ngọc",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#mai") {
  setInvitation(
    name_en="Mai",
    name_vi="Mai",
    name_fr="Mai",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#dat-anh") {
  setInvitation(
    name_en="Dat and Anh",
    name_vi="Đạt và Ánh",
    name_fr="Dat et Anh",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#tra") {
  setInvitation(
    name_en="Tra",
    name_vi="Trà",
    name_fr="Tra",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#co-Hong") {
  setInvitation(
    name_en="Hong",
    name_vi="cô Hồng",
    name_fr="Hong",
    defaultlang="vi",
    vi_pronoun="bọn cháu"
  )
}
else if (window.location.hash == "#trang") {
  setInvitation(
    name_en="Trang",
    name_vi="Trang",
    name_fr="Trang",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#anhdiep-chibich") {
  setInvitation(
    name_en="gia đình anh Điệp chị Bích",
    name_vi="gia đình anh Điệp chị Bích",
    name_fr="gia đình anh Điệp chị Bích",
    defaultlang="vi",
    vi_pronoun="chúng em"
  )
}
else if (window.location.hash == "#tram-tinh") {
  setInvitation(
    name_en="Tram and Tinh",
    name_vi="Trâm và Tình",
    name_fr="Tram et Tinh",
    defaultlang="en",
    // vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#nhi-son") {
  setInvitation(
    name_en="Nhi and Son",
    name_vi="Nhi và anh Sơn",
    name_fr="Nhi et Son",
    defaultlang="en",
    // vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#bo-me") {
  setInvitation(
    name_en="bố mẹ",
    name_vi="bố mẹ",
    name_fr="bo me",
    defaultlang="vi",
    vi_pronoun="bọn con"
  )
}
else if (window.location.hash == "#dang-huy") {
  setInvitation(
    name_en="Dang Huy",
    name_vi="Đăng Huy",
    name_fr="Dang Huy",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#son") {
  setInvitation(
    name_en="Son",
    name_vi="Sơn",
    name_fr="Son",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#na") {
  setInvitation(
    name_en="Ngoc Anh",
    name_vi="Ngọc Anh",
    name_fr="Ngoc Anh",
    defaultlang="en",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#binh") {
  setInvitation(
    name_en="Binh",
    name_vi="Bình",
    name_fr="Binh",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#an") {
  setInvitation(
    name_en="An",
    name_vi="An",
    name_fr="An",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#linh") {
  setInvitation(
    name_en="Linh",
    name_vi="Linh",
    name_fr="Linh",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#bthang-bnhien") {
  setInvitation(
    name_en="gia đình bác Thắng và bác Nhiên",
    name_vi="gia đình bác Thắng và bác Nhiên",
    name_fr="gia đình bác Thắng và bác Nhiên",
    defaultlang="vi",
    vi_pronoun="chúng cháu"
  )
}

else if (window.location.hash == "#bloi-bha") {
  setInvitation(
    name_en="gia đình bác Lợi và bác Hà",
    name_vi="gia đình bác Lợi và bác Hà",
    name_fr="gia đình bác Lợi và bác Hà",
    defaultlang="vi",
    vi_pronoun="chúng cháu"
  )
}

else if (window.location.hash == "#truong") {
  setInvitation(
    name_en="Trưởng",
    name_vi="Trưởng",
    name_fr="Trưởng",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#long") {
  setInvitation(
    name_en="Long",
    name_vi="Long",
    name_fr="Long",
    defaultlang="vi",
    // vi_pronoun="chúng mình"
  )
}

else if (window.location.hash == "#khuyen") {
  setInvitation(
    name_en="chị Khuyên",
    name_vi="chị Khuyên",
    name_fr="chị Khuyên",
    defaultlang="vi",
    vi_pronoun="chúng em"
  )
}

else if (window.location.hash == "#bao") {
  setInvitation(
    name_en="em Bảo",
    name_vi="em Bảo",
    name_fr="em Bảo",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#nu") {
  setInvitation(
    name_en="cô Nụ",
    name_vi="cô Nụ",
    name_fr="cô Nụ",
    defaultlang="vi",
    vi_pronoun="chúng cháu"
  )
}

else if (window.location.hash == "#trucquynh") {
  setInvitation(
    name_en="gia đình chị Quỳnh",
    name_vi="gia đình chị Quỳnh",
    name_fr="gia đình chị Quỳnh",
    defaultlang="vi",
    vi_pronoun="chúng em"
  )
}

else if (window.location.hash == "#nhungpham") {
  setInvitation(
    name_en="gia đình chị Nhung",
    name_vi="gia đình chị Nhung",
    name_fr="gia đình chị Nhung",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#minhanh") {
  setInvitation(
    name_en="Minh Anh",
    name_vi="Minh Anh",
    name_fr="Minh Anh",
    defaultlang="vi",
    // vi_pronoun="bọn bác"
  )
}

else if (window.location.hash == "#thanhthuy") {
  setInvitation(
    name_en="Thủy",
    name_vi="Thủy",
    name_fr="Thủy",
    defaultlang="vi",
    // vi_pronoun="chúng mình"
  )
}

else if (window.location.hash == "#ducanh") {
  setInvitation(
    name_en="Đức Anh",
    name_vi="Đức Anh",
    name_fr="Đức Anh",
    defaultlang="vi",
    // vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#hnduong") {
  setInvitation(
    name_en="Dương",
    name_vi="Dương",
    name_fr="Dương",
    defaultlang="vi",
    // vi_pronoun="chúng mình"
  )
}

}
