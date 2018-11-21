import * as React from "react";
import { Button } from "../buttons";
import { colorPallet } from "../../utils/style";

export const SecondaryButtons = () => {
	return (
		<div className="buttons">
			<div className="primary">
				<h3>Secondary</h3>
				<div>
					<Button secondary>شروع با کاموا</Button>
					<Button color={colorPallet.secondary} secondary>شروع با کاموا</Button>
					<Button color={colorPallet.third} secondary>شروع با کاموا</Button>
				</div>
				<div>
					<Button disable={true} secondary>شروع با کاموا</Button>
					<Button color={colorPallet.secondary} disable={true} secondary>
						شروع با کاموا
					</Button>
					<Button color={colorPallet.third} disable={true} secondary>
						شروع با کاموا
					</Button>
				</div>
			</div>
		</div>
	);
};
