export default class NewBaoJian{
    gongzhu(number) {
        this.user = number==1?'如花':'花如'
    }
    anjiao(){
        this.fuwu = this.user + '为你服务'
    }
    anmo(){
        this.fuwu = this.user + '为您服务'
    }
}