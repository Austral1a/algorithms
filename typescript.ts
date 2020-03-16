export const noOdds = (values: number[]): number[] => {
    return values.filter(n => (n % 2) == 0);
};

export const lateRide = (n: number): number => {

    let hour: number = 0;
    let minute: number = 0;
    
    while(n >= 60) {
        n -= 60;
        hour += 1;
    };
    minute = n;

    let res: any = hour + '' + minute;
    return [...res].reduce((accum, el) => {
        return +accum + +el;
    });

};
