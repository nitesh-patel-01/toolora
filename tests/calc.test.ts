import { describe,it,expect } from 'vitest';
import { percentOf,percentChange,average,discountPrice,loanPayment,compound,bmi,slugify,countText,convertTemp } from '../lib/calc';
describe('calc',()=>{
 it('percent',()=>{expect(percentOf(20,150)).toBe(30); expect(percentChange(100,125)).toBe(25);});
 it('average & discount',()=>{expect(average([2,4,6])).toBe(4); expect(discountPrice(100,20)).toBe(80);});
 it('loan zero rate',()=>{expect(loanPayment(12000,0,12)).toBe(1000);});
 it('compound',()=>{expect(compound(1000,0,5)).toBe(1000);});
 it('bmi',()=>{expect(Math.round(bmi(70,1.75)*10)/10).toBe(22.9);});
 it('slug & count',()=>{expect(slugify('Hello World! 2026')).toBe('hello-world-2026'); expect(countText('One two. Three!').words).toBe(3);});
 it('temp',()=>{expect(convertTemp(100,'C','F')).toBe(212); expect(convertTemp(32,'F','C')).toBe(0);});
});
