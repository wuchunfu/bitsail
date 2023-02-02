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

package com.bytedance.bitsail.connector.doris.committer;

import lombok.Data;

import java.io.Serializable;

@Data
public class DorisCommittable implements Serializable {
  private final String hostPort;
  private final String db;
  private final long txnID;

  public DorisCommittable(String hostPort, String db, long txnID) {
    this.hostPort = hostPort;
    this.db = db;
    this.txnID = txnID;
  }
}
