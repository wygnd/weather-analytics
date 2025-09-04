import {BadGatewayException, CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {catchError, Observable, tap, throwError} from "rxjs";


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const now = Date.now();
		const request = context.switchToHttp().getRequest();
		const method = request.method;
		const url = request.originalUrl;

		// todo: Fix interceptor
		// Issue: whe server return 502code console get string: "201 | [POST] request to /city - 2ms" not good
		return next.handle().pipe(
			tap(() => {
				const response = context.switchToHttp().getResponse();
				const delay = Date.now() - now;
				console.log(`${response.statusCode} | [${method}] request to ${url} - ${delay}ms`);
			}),
			catchError((err) => {
				const response = context.switchToHttp().getResponse();
				const delay = Date.now() - now;
				console.log(`${response.statusCode} | [${method}] request to ${url} - ${delay}ms`);
				return throwError(() => new BadGatewayException(err));
			})
		);
	}
}