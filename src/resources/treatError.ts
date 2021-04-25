// MARK: Resources
import strings from "./strings";

// MARK: Implementation
enum ErrorType {
	Fatal = "Fatal",
	Connection = "Connection",
	BadFormattedResponse = "BadFormattedResponse",
}

export interface IError {
	type: ErrorType;
	message: string;
}

function treatErrorMessage(errorMessage: any): string {
	if (errorMessage && typeof errorMessage === "object") {
		return JSON.stringify(errorMessage);
	}

	return `${errorMessage}`;
}

export function treatError(e: any, hideErrorMessageOnFatal: boolean = true): IError {
	// eslint-disable-next-line no-console
	console.error(e);

	let error: IError | undefined;

	if (typeof e === "object") {
		if (Object.keys(ErrorType).includes(e.type) && e.message) {
			error = {
				type: e.type,
				message: treatErrorMessage(e.message),
			};
		} else {
			error = {
				type: ErrorType.Fatal,
				message: treatErrorMessage(e),
			};
		}
	} else {
		error = {
			type: ErrorType.Fatal,
			message: treatErrorMessage(e),
		};
	}

	if (!__DEV__
		&& hideErrorMessageOnFatal
		&& (error.type === ErrorType.Fatal
			|| error.type === ErrorType.BadFormattedResponse
			|| error.type === ErrorType.Connection)) {
		error.message = strings.error.default;
	}

	return error;
}
