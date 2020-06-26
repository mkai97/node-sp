/*
 * @Author: your name
 * @Date: 2020-06-04 09:40:39
 * @LastEditTime: 2020-06-16 18:52:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \officialWebsite\request\message.js
 */ 
function submit(){
    var title = $('#name').val()
    var weixin = $('#weixin').val()
    var email = $('#email').val()
    var phonenumber = $('#tel').val()
    var content = $('#content').val()
    var data = {
        title,
        weixin,
        email,
        phonenumber,
        content
    }
    console.log(data)
    if(data.weixin==''&&data.phonenumber==''&&data.email==''){
        debugger
        alert('请填写联系方式再点击提交。')
        return
    }
    if(!data.content){
        alert('请填写内容再点击提交。')
        return
    }
     
    saveWords(data).then(res=>{
        if(res.data.code==200){
            alert('提交成功')
        }
        console.log(res)
    })
}