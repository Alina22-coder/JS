// #3ckURgvs
let time = prompt('Введіть чверть години:');

if (time>=0 && time <= 15){
    console.log('Перша частина години');
} else if (time>=16 && time <= 30){
    console.log('Друга частина години');
} else if (time>=31 && time <= 45){
    console.log('Третья частина години');
}else if (time>=46 && time <= 59) {
    console.log('Четверта частина години');
}
