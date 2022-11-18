var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 2] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
console.log("------->", OrderStatus.PENDING);
