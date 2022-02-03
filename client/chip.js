class Chip {
    constructor(numberOfInputs, numberOfOutputs) {
        this.numberOfInputs = numberOfInputs;
        this.numberOfOutputs = numberOfOutputs;
        this.name = 'Unnamed Chip';
        this.receivedInputs = 0;
    }

    get numberOfInputs() {
        return this._numberOfInputs;
    }

    set numberOfInputs(value) {
        this._numberOfInputs = value;
        if (this.inputs) {
            let src = this.inputs;
            this.inputs = [];
            for (let i = 0; i < value; i++) {
                this.inputs.push(src[i]);
            }
        }
    }

    get numberOfOutputs() {
        return this._numberOfOutputs;
    }

    set numberOfOutputs(value) {
        this._numberOfOutputs = value;
        if (this.outputs) {
            let src = this.outputs;
            this.outputs = [];
            for (let i = 0; i < value; i++) {
                this.outputs.push(src[i]);
            }
        }
    }

    reset() {
        this.inputs = this.inputs.map(x => 0);
        this.receivedInputs = 0;
    }

    process() {
        throw `Class ${this.constructor.name} MUST implement method process()`
    }

    receive(signal, index) {
        if (this.inputs) {
            this.inputs[index].receive(signal);
            if (this.receivedInputs == this.inputs.length) {
                this.receivedInputs = 0;
                this.process();
            }
        }
    }
}