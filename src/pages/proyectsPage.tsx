import { TextMedium, TittleLargeBold } from "../components/Utilities/Texts";

const ProyectsPage = () => {
    return (
        <>
            <TittleLargeBold>PROYECTO: Yogurt</TittleLargeBold> 
            <TextMedium>Materiales:</TextMedium>
            <TextMedium>1 Litro de leche entera, <br/>
                200 Gramos de Leche en Polvo <br/>
                2 Cucharadas de yogur natural sin azucar <br/>
                1 Olla de acero inoxidable <br/>
                Cucharas, <br/>
                Fracos de vidrio con tapa
            </TextMedium>
            <br/>
            <div style={{textAlign: 'center', margin: '5vh'}}>
                <TextMedium>Pasos:</TextMedium>
                <TextMedium>
                    1. Calentar la leche a 80 grados.
                </TextMedium>
                <img src="lechecalentandose.webp" style={{maxWidth: '50%', maxHeight: '50%'}}/>
                <TextMedium>
                    2. Mezclar 200 gr de Leche en polvo y dos cucharadas del yogur natural sin azucar y revolver.
                </TextMedium>
                <img src="polvo.webp" style={{maxWidth: '50%', maxHeight: '50%'}}/>
                <TextMedium>
                    3. Mezclar la mezcla hecha con la leche en polvo y el yogur con la leche calentada a 80 grados.
                </TextMedium>
                <TextMedium>
                    4. Dejar que enfrie a 45 grados y luego guardar en un lugar frio.
                </TextMedium>
                
            </div>
        </>
    );
};

export default ProyectsPage;