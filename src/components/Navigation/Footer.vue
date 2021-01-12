<template>
    <div>
        <div class="footer">
            <img src="./logo.png" alt="">
            <p>Copyright   1998 - 2019  Tencent.All  Rights Reserved.</p >
            <p>联系电话 : 0755-86013388 QQ群 : 55209235</p >
        </div>
    </div>
</template>


<script>

export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-top: 70px;
    margin-bottom: 70px;
}
.footer p{
    margin: 0;
    padding: 0;
    font-size: 13px;
    color:gray;
}
.footer img{
    width: 80px;
    margin-bottom: 10px;
}


</style>