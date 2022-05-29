import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";
import {DividerStyled} from "./styles";


const Foreword = () => (
    <Typography
        variant="body1"
        color="text.primary"
    >
        О готовности заказа мы сообщим Вам по телефону или на электронную почту (если не удалось с Вами связаться), указанные Вами при регистрации на сайте.
    </Typography>
);

const PaymentText = () => (
    <Box>
        <Typography
            variant="h4"
            color="text.primary"
            sx={{ my: 3 }}
        >
            Оплата
        </Typography>
        <Typography
            variant="body1"
            color="text.primary"
        >
            Способы оплаты:
        </Typography>
        <Typography
            variant="body1"
            color="text.primary"
            component="ul"
            sx={{ mb: 3 }}
        >
            <li>оплата наличными при получении;</li>
            <li>перевод на банковскую карту;</li>
            <li>опата через ЕРИП (без комиссии).</li>
        </Typography>
        <Typography
            variant="body1"
            color="text.primary"
        >
            Изготовление изделий ручной работы стоимостью свыше 50 рублей произвоится по предоплате. Предоплата составляет 50% общей стоимости заказа.
            Изготовление изделий с указанием индивидуальных надписей (с использованием имен, дат и т.д.) производится после 100% предоплаты.
            Оплата производится после согласования цены, обсуждения всех деталей заказа и до поступления его в обработку.
        </Typography>
    </Box>
);

const DeliveryText = () => (
    <Box>
        <Typography
            variant="h4"
            color="text.primary"
            sx={{ my: 3 }}
        >
            Доставка
        </Typography>
        <Typography
            variant="body1"
            color="text.primary"
        >
            Способы доставки:
        </Typography>
        <Typography
            variant="body1"
            color="text.primary"
            component="ul"
        >
            <li>самовывоз (место и время согласовывается индивидуально);</li>
            <li>почтой по Беларуси;</li>
            <li>Европочтой по Беларуси (ОПС-ОПС).</li>
        </Typography>
    </Box>
);

const PaymentAndDelivery = () => (
    <main>
        <Box sx={{ py: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "80%" }}>
                <Foreword />
                <PaymentText />
                <DividerStyled />
                <DeliveryText />
            </Box>
        </Box>
    </main>
);

export default PaymentAndDelivery;
