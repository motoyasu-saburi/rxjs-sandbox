import "rxjs/add/observable/race";
import "rxjs/add/observable/forkJoin";
import {Observable} from "rxjs/Observable";

Observable
    .race(
        Observable.timer(1000),
        Observable.timer(2000),
        Observable.timer(3000)
    )
    .subscribe(
        t => console.log(t),
        error => console.log(error),
        () => console.log('complete')
    );