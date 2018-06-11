import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchNameUser'
})
 export class SearchNameUserPipe implements PipeTransform {
    transform(users, value) {
        return users.filter(user => {
            return user.firstName.includes(value)
        })
    }
 }