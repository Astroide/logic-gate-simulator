export class Pin {
    constructor(chip, type = 'input', index = 0) {
        this.chip = chip;
        this.type = type;
        this.index = index;
    }
}
export class Wire {
    constructor(In, Out) {
        this.In = In;
        this.Out = Out;
        this.subwires = [];
        if (!this.In instanceof Wire) {
            this.In.chip.outputs[this.In.index] = this;
        }
    }

    /** @param {Wire} wire */
    addSubwire(wire) {
        this.subwires.push(wire);
    }

    /** @param {Wire} wire */
    removeSubwire(wire) {
        if (this.subwires.includes(wire)) {
            this.subwires.splice(this.subwires.indexOf(wire));
        }
    }

    receive(signal) {
        if (this.subwires.length > 0) {
            for (let i = 0; i < this.subwires.length; i++) {
                this.subwires[i].receive(signal);
            }
        }
        this.Out.chip.receive(signal, this.Out.index);
    }
}