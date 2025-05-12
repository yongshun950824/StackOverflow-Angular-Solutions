import { NativeDateAdapter } from "@angular/material/core";


export class AppDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {
        console.log(date);
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }
}