import { strings } from './languages.js';
export class AndChip extends Chip {
    constructor() {
        this.name = strings.gates.AND;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(this.inputs[0].value && this.inputs[1].value);
    }
}
export class XorChip extends Chip {
    constructor() {
        this.name = strings.gates.XOR;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive((this.inputs[0].value || this.inputs[1].value) && !(this.inputs[0].value && this.inputs[1].value));
    }
}
export class XnorChip extends Chip {
    constructor() {
        this.name = strings.gates.XNOR;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(this.inputs[0].value == this.inputs[1].value);
    }
}
export class OrChip extends Chip {
    constructor() {
        this.name = strings.gates.OR;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(this.inputs[0].value || this.inputs[1].value);
    }
}
export class NotChip extends Chip {
    constructor() {
        this.name = strings.gates.NOT;
        this.numberOfInputs = 1;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(!this.inputs[0].value);
    }
}
export class NandChip extends Chip {
    constructor() {
        this.name = strings.gates.NAND;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(!(this.inputs[0].value && this.inputs[1].value));
    }
}
export class NorChip extends Chip {
    constructor() {
        this.name = strings.gates.NOR;
        this.numberOfInputs = 2;
        this.numberOfOutputs = 1;
    }
    process() {
        this.outputs[0].receive(!(this.inputs[0].value || this.inputs[1].value));
    }
}
export const BUILTIN_CHIPS = [];