class Impuesto {
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual   = montoBrutoAnual;
        this._deducciones       = deducciones;
    }
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual){
        this._montoBrutoAnual   = nuevoMontoBrutoAnual;
    }
    get deducciones(){
        return this._deduciones;
    }
    set deducciones(nuevoDeducciones){
        this._deduciones        = nuevoDeducciones;
    }
}
export default Impuesto;