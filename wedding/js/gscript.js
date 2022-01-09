// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "<span>Ngọc Lâm & Quỳnh Hương Yến cordially invite</span>";
      invitation_end_en = "<span>to our wedding ceremony and wedding party.</span>";
    invitation_start_vi = "<span>Ngọc Lâm và Quỳnh Hương thân mời</span>";
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
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + name_vi + invitation_end_vi_no_pronoun + vi_pronoun + ".</span>";
    }
}

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#anh-luan-hong-anh") {
  setInvitation(
    name_en="Luan and Hong Anh",
    name_vi="anh Luân Hồng Anh",
    name_fr="Luan et Hong Anh",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-hai") {
  setInvitation(
    name_en="Hai and your family",
    name_vi="anh Hải và gia đình",
    name_fr="Hai et ta famille",
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
    vi_pronoun="bọn mình"
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
    name_en="Tuan",
    name_vi="anh Tuấn",
    name_fr="Tuan",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#vo-tuan") {
  setInvitation(
    name_en="Vo Tuan",
    name_vi="Võ Tuấn",
    name_fr="Vo Tuan",
    defaultlang="vi",
    vi_pronoun="bọn mình"
  )
}
else if (window.location.hash == "#anh-ngoc-anh") {
  setInvitation(
    name_en="Ngoc Anh and your familly",
    name_vi="gia đình anh Ngọc Anh",
    name_fr="Ngoc Anh et ta famille",
    defaultlang="vi",
    vi_pronoun="bọn em"
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
else if (window.location.hash == "#anh-phuoc-x14") {
  setInvitation(
    name_en="Phuoc",
    name_vi="anh Phước",
    name_fr="Phuoc",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#gia-dinh-Linh") {
  setInvitation(
    name_en="Linh and your family",
    name_vi="gia đình Linh",
    name_fr="Linh et ta famille",
    defaultlang="vi",
    // vi_pronoun="bọn em"
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
    // vi_pronoun="anh chị"
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

}
