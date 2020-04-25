package com.joshua.StockManagementSystem.joseph_api.model;

public class Production {
    private String id, itemCode, producer;
    private String productionDate;
    private int quantity;

    public Production() {
    }

    public String getId() {
        return id;
    }

    public Production setId(String id) {
        this.id = id;return this;
    }

    public String getItemCode() {
        return itemCode;
    }

    public Production setItemCode(String itemCode) {
        this.itemCode = itemCode;return this;
    }

    public String getProducer() {
        return producer;
    }

    public Production setProducer(String producer) {
        this.producer = producer;return this;
    }

    public String getProductionDate() {
        return productionDate;
    }

    public Production setProductionDate(String productionDate) {
        this.productionDate = productionDate;return this;
    }

    public int getQuantity() {
        return quantity;
    }

    public Production setQuantity(int quantity) {
        this.quantity = quantity;return this;
    }
}
