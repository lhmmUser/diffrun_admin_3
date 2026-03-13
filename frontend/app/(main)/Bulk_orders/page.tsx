import OrdersView from "../components/OrdersView";

export default function TestOrdersPage() {
  return <OrdersView
    title="Bulk Orders"
    defaultDiscountCode="TINA"
    hideDiscountFilter={true}
  />;
}