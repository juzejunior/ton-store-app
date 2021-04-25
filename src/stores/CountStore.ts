// MARK: Mobx
import { action, observable } from "mobx";

// MARK: Implementation
export default class CountStore {
	@observable public count: number;

	@action
	public incrementCount = () => {
		this.count += 1;
	}

	constructor() {
		this.count = 0;
	}
}

export const countStore = new CountStore();
