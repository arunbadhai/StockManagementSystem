package com.joshua.StockManagementSystem.joseph_impl.api;

import com.joshua.StockManagementSystem.joseph_api.api.CustomerAPIController;
import com.joshua.StockManagementSystem.joseph_api.api.payload.UpsertCustomerRequestPayload;
import com.joshua.StockManagementSystem.joseph_api.domain.CustomerService;
import com.joshua.StockManagementSystem.joseph_api.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.constraints.NotNull;
import java.util.List;

@Component("custAPIV1")
public class CustomerAPIControllerImpl implements CustomerAPIController {
  private  final CustomerService customerService;

  @Autowired
  public CustomerAPIControllerImpl(@Qualifier("custV1Service") CustomerService customerService) {
    this.customerService = customerService;
  }

  @Override
  public List<String> insertCustomer(@NotNull @RequestBody UpsertCustomerRequestPayload upsertCustomerRequestPayload) {
    return customerService.insertCustomer(upsertCustomerRequestPayload);
  }

  @Override
  public @ResponseBody
  List<Customer> indexCustomer() {
    return customerService.indexCustomer();
  }

  @Override
  public Customer showCustomer(String id) {
    return customerService.showCustomer(id);
  }

  @Override
  public List<String> updateCustomer(@NotNull UpsertCustomerRequestPayload upsertCustomerRequestPayload) {
    return customerService.updateCustomer(upsertCustomerRequestPayload);
  }

  @Override
  public List<String> deleteCustomer(@NotNull String id) {
    return customerService.deleteCustomer(id);
  }


}