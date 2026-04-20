import{r}from"./request.C7VSfCSl.js";function t(t,e=1,o=20){return r(`/orders?tab=${t}&page=${e}&limit=${o}`,"GET")}function e(t){return r(`/orders/${t}`,"DELETE")}export{t as a,e as b};
