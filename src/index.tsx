import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import Modal from "react-modal";
import { createServer, Model } from "miragejs";


Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        // {
        //   id: 1,
        //   title: "Freelas Website",
        //   type: "deposit",
        //   category: "Dev",
        //   amount: 6000,
        //   createdAt: new Date("2023-01-19 05:07:23"),
        // },
        // {
        //   id: 2,
        //   title: "Celular",
        //   type: "withdraw",
        //   category: "Compras",
        //   amount: 2000,
        //   createdAt: new Date("2023-01-19 05:08:23"),
        // },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }

})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

