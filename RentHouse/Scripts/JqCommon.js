function CHUNG_GAN_DL_COMBO(p_url, p_name, p_selectedValue, p_controlName, p_dataJson) {


    var dataJson;
    var arrName = p_name.split(',');
    var arrSelectedValue = '';

    if (p_selectedValue != undefined && p_selectedValue != null)
        arrSelectedValue = p_selectedValue.split(',');

    if (p_url != '' && p_url != null)
        dataJson = getDataJson(p_url, p_controlName);
    else
        dataJson = p_dataJson;

    for (var i = 0; i < arrName.length; i++) {
        if (dataJson == null) {
            $('#' + $.trim(arrName[i])).html('');
            return;
        }
        if (arrSelectedValue.length > 1) {
            var temp = generateOptionCombobox(dataJson, arrSelectedValue[i]);
        } else {
            var temp = generateOptionCombobox(dataJson, p_selectedValue);
        }
        $('#' + $.trim(arrName[i])).html(temp.split("'").join(''));
    }

}

function generateOptionCombobox(p_dataCombobox, p_selectedValue) {
    var temp = '';
    if (p_selectedValue == '')
        temp += '<option value=""> --- Chọn --- </option>';
    $.each(p_dataCombobox, function (index) {
        var item = p_dataCombobox[index];
        if (typeof item.MaSV == typeof undefined) {
            if (item.MaSV == p_selectedValue)
                temp += '<option value="' + item.TenSV + '" selected="selected">' + item.TenSV + '</option>';
            else
                temp += '<option value="' + item.MaSV + '">' + item.TenSV + '</option>';
        } else {
            if (item.Ma == p_selectedValue)
                temp += '<option value="' + item.MaSV + '" selected="selected">' + item.TenSV + '</option>';
            else
                temp += '<option value="' + item.MaSV + '">' + item.TenSV + '</option>';
        }
    });

    return temp;
}

function CHUNG_GAN_TABLE(p_name, p_dataJson) {
    var temp = '';
    $.each(p_dataJson, function (index) {
        var item = p_dataJson[index];
        temp += '<tr><td>' + item.MaSV + '</td><td>' + item.TenSV + '</td><td><button onclick="myFunction(\'' + item.MaSV +'\')">EDIT</button></td></tr>';
    });
    $('#' + p_name).html(temp);
}