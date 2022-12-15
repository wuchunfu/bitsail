/*
 * Copyright 2022 Bytedance Ltd. and/or its affiliates.
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

package com.bytedance.bitsail.base.messenger.common;

/**
 * Created 2022/7/14
 */
public enum MessengerCounterType {
  SUCCESS_RECORDS_COUNT,

  SUCCESS_RECORDS_BYTES,

  FAILED_RECORDS_COUNT,

  FAILED_RECORDS_BYTES,

  CURRENT_SPLIT,

  TASK_RETRY_COUNT,

  LIST_DIRTY
}
