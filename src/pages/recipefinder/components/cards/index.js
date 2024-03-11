import React from "react";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Purple } from "../../../../components/colors";
import { useNavigate } from "react-router-dom";

function IgredientesComponent({ Data, color, Inexistente = "" }) {
  return (
    <Box m={1}>
      {Data.length > 0 ? (
        <>
          {Data.map((item) => (
            <Box>
              <Typography
                color={color}
                variant={window.innerWidth > 420 ? "subtitle2" : "body2"}
              >
                - {item.name}
              </Typography>
            </Box>
          ))}
        </>
      ) : (
        <Typography color={color} variant="subtitle1">
          Não tem ingredientes {Inexistente} nesta receita
        </Typography>
      )}
    </Box>
  );
}

export default function CardsRecipe({
  titulo,
  imagem,
  usados,
  naousados,
  falta,
  id,
}) {
  const navegacao = useNavigate();

  return (
    <Box
        m={2}
      sx={{
        border: 1,
        borderColor: Purple,
        borderRadius: 10,
        backgroundImage:`url(${imagem})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Button
        p={2}
        onClick={() => navegacao(`/recipe/${id}`)}
        sx={{
          active: `color:${Purple}`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
        height: '100%',
        borderRadius: 10,
        }}
        fullWidth
        // m={5}
      >
          <Box
          m={2}
            sx={{
              width: "100%",
              height: "100%",
            }}
            flexWrap="wrap"
          >
            <Typography
              paragraph
              // noWrap
              display="block"
              sx={{
                  color:"#fff"
              }}
              variant={window.innerWidth > 420 ? "h6" : "body1"}
            >
              {titulo}
            </Typography>
          </Box>
          <Box
          m={2}
          sx={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <IgredientesComponent Data={usados} color="green" />
          <IgredientesComponent
            Data={naousados}
            color="gray"
            Inexistente="não utilizados"
          />
          <IgredientesComponent
            Data={falta}
            color="red"
            Inexistente="faltantes"
          />
        </Box>
      </Button>
      
    </Box>
  );

}
