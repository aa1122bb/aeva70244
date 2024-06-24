function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        propertyId: params.get('propertyId')
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const { propertyId } = getQueryParams();
    if (propertyId) {
        const propertyDetails = {
            property1: {
                city: "دمشق",
                area: "ركن الدين",
                floor: "الطابق الثالث",
                parking: "متوفر كراج",
                ownership: "طابو",
                balcony: "بلكون مساحة 12 متر",
                furnished: "مفروشة",
                images: ["image1.jpg", "image2.jpg"]
            },
            property2: {
                city: "حمص",
                area: "وسط البلد",
                floor: "الأرضي",
                parking: "غير متوفر",
                ownership: "طابو",
                balcony: "بدون بلكون",
                furnished: "غير مفروشة",
                images: ["image3.jpg"]
            },
            property3: {
                city: "دمشق",
                area: "المزة",
                floor: "الطابق الأول",
                parking: "متوفر كراج",
                ownership: "طابو",
                balcony: "بلكون مساحة 15 متر",
                furnished: "غير مفروشة",
                images: ["image4.jpg", "image5.jpg"]
            }
            // Add more properties as needed
        };
        
        const details = propertyDetails[propertyId];
        if (details) {
            const detailsContainer = document.getElementById('property-details');
            let imagesHtml = details.images.map(img => `<img src="${img}" alt="صورة العقار" style="width:100px;height:100px;">`).join('');
            detailsContainer.innerHTML = `
                <h2>تفاصيل العقار المختار</h2>
                <p><strong>المدينة:</strong> ${details.city}</p>
                <p><strong>المنطقة:</strong> ${details.area}</p>
                <p><strong>الطابق:</strong> ${details.floor}</p>
                <p><strong>كراج:</strong> ${details.parking}</p>
                <p><strong>الملكية:</strong> ${details.ownership}</p>
                <p><strong>بلكون:</strong> ${details.balcony}</p>
                <p><strong>مفروشة:</strong> ${details.furnished}</p>
                <div>${imagesHtml}</div>
            `;
        }
    }
});

function validateForm() {
    // Validate form inputs
    var fullName = document.getElementById("fullname").value;
    var id = document.getElementById("id").value;
    var date = document.getElementById("date").value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var captcha = document.getElementById('captcha').value;
//الحصول على قيمة الرمز capatcha الحقيقية
var captchaValue =document.getElementById("captcha-image").alt;
//انشاء متغير للتحقق من الصحة 
var valid = true;
//التحقق من الاسم اذا كان يحتوي على احرف هجاىية فقط باللغة العربية 
var namePattern = /^[ي-ا\s]+$/;
if (!namePattern.test(name)) {
alert("الاسم يجب ان يحتوي على احرف هجاىية فقط باللغة العربية");
valid = false;

}
//اذا كان يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة 
var idPattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
if (idPattern.test(id))  {
    alert("يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة")
    valid = false;
}
//التحقق من تاريخ اولادة اذا كان ياخذ الشكل dd-mm-yyyy
var dataPattarn =/^d{2}-\d{2}-\{4}$/;
if (!idPattern.test(id)) {
    alert("تاريخ الولادة يجب ان ياحذ الشكل dd-mm-yyyy");
    valid = false;
}
    if (!fullName || !nationalId || !dob || !phone || !email || !captcha) {
        alert('يرجى ملء جميع الحقول.');
        return false;
    }

    // Further validation logic here

    alert('تم إرسال النموذج بنجاح!');
    return false;
}

