/*
 * Copyright 2023 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.shaded.hive.shim;

import org.apache.hadoop.hive.conf.HiveConf;
import org.apache.hadoop.hive.metastore.HiveMetaStoreClient;
import org.apache.hadoop.hive.metastore.IMetaStoreClient;
import org.apache.hadoop.hive.metastore.RetryingMetaStoreClient;

import java.lang.reflect.Method;

public class HiveShimV200 extends HiveShimV122 {
  @Override
  public IMetaStoreClient getHiveMetastoreClient(HiveConf hiveConf) {
    try {
      Class<?>[] constructorArgTypes = {HiveConf.class};
      Object[] constructorArgs = {hiveConf};
      Method method =
          RetryingMetaStoreClient.class.getMethod(
              "getProxy",
              HiveConf.class,
              constructorArgTypes.getClass(),
              constructorArgs.getClass(),
              String.class);
      // getProxy is a static method
      return (IMetaStoreClient)
          method.invoke(
              null,
              hiveConf,
              constructorArgTypes,
              constructorArgs,
              HiveMetaStoreClient.class.getName());
    } catch (Exception e) {
      throw new RuntimeException("Error while calling HiveMetaClientUtil::getMetastoreClient. " + e.getMessage(), e);
    }
  }

  @Override
  public String getVersion() {
    return "2.0.0";
  }
}
