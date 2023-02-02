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

package com.bytedance.bitsail.connector.hbase.sink.function;

import org.apache.commons.lang.StringUtils;

public class FunctionFactory {

  public static IFunction createFunction(String functionName) {
    if (StringUtils.isBlank(functionName)) {
      throw new UnsupportedOperationException("function name can't be null!");
    }

    IFunction function;
    switch (functionName.toUpperCase()) {
      case "MD5":
        function = new Md5Function();
        break;
      case "STRING":
        function = new StringFunction();
        break;
      case "CONSTANT":
        function = new ConstantFunction();
        break;
      default:
        throw new UnsupportedOperationException(String.format("Function [%s] is not supported!", functionName));
    }
    return function;
  }

}
