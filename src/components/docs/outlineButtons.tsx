import * as React from "react";
import { Button } from "../buttons";
import { colorPallet } from "../../utils/style";

export const OutlineButtons = () => {
	return (
		<div className="buttons">
			<div className="primary">
				<h3>Outline</h3>
				<div>
					<Button outline>شروع با کاموا</Button>
					<Button color={colorPallet.secondary} outline>شروع با کاموا</Button>
					<Button color={colorPallet.third} outline>شروع با کاموا</Button>
				</div>
				<div>
					<Button disable={true} outline>شروع با کاموا</Button>
					<Button color={colorPallet.secondary} disable={true} outline>
						شروع با کاموا
					</Button>
					<Button color={colorPallet.third} disable={true} outline>
						شروع با کاموا
					</Button>
				</div>
			</div>
		</div>
	);
};
